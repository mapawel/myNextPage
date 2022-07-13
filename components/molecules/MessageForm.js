import { useRouter } from 'next/router';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { Formik, ErrorMessage } from 'formik';
import { validatorSchema } from 'validators/validatorSchema';
import SentMailPopUp from 'components/organisms/SentMailPopUp';
import TextModal from 'components/organisms/TextModal';
import { Portal } from 'react-portal';

const spin = keyframes`
  from {
    transform: translateY(-50%) rotate(0) 
  }
  to {
    transform: translateY(-50%) rotate(360deg) 
  }
`;

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
`;

const StyledSubmitButtonBox = styled.div`
  position: relative;
  & > img {
    display: none;
  }
  ${({ submitting }) =>
    submitting &&
    css`
      & > img {
        display: block;
        position: absolute;
        top: 50%;
        right: -100%;
        height: 100%;
        width: 100%;
        transform: translateY(-50%);
        animation: ${spin} 1s infinite linear;
      }
    `}
`;

const StyledForm = styled.form`
  margin-bottom: 7rem;
`;

const StyledError = styled.p`
  position: absolute;
  width: 100%;
  bottom: -2rem;
  left: 1rem;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.textSecondary};
  text-decoration: underline;
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.color.particles};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-family: ${({ theme }) => theme.fontFamily.main};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
`;

const MessageForm = ({ data }) => {
  const { locale } = useRouter();
  const [mailResponse, setMailResponse] = useState(null);
  const [isPolicyVisible, setShowPolicy] = useState(false);

  const handleSentMailFeedback = (status) => {
    setMailResponse(status);
  };

  const togglePolicy = () => {
    setShowPolicy(!isPolicyVisible);
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          mail: '',
          category: '',
          content: '',
          acceptTerms: false,
        }}
        // validationSchema={validatorSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          const response = await fetch('/api/sendmail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });

          const responseObject = await response.json();
          setMailResponse(responseObject);
          // resetForm();
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting, resetForm }) => (
          <StyledForm onSubmit={(e) => e.preventDefault()}>
            <Input
              name="name"
              id="name"
              onChange={handleChange}
              value={values.name}
              labelTxt={data?.placeholder1?.[locale]}
              headerTxt={data?.title1?.[locale]}
            >
              <ErrorMessage component={StyledError} name="name" />
            </Input>
            <Input
              name="mail"
              id="mail"
              onChange={handleChange}
              value={values.mail}
              labelTxt={data?.placeholder2?.[locale]}
              headerTxt={data?.title2?.[locale]}
            >
              <ErrorMessage component={StyledError} name="mail" />
            </Input>
            <Input
              name="category"
              id="category"
              onChange={handleChange}
              value={values.category}
              headerTxt={data?.title3?.[locale]}
              select={[
                ['---', '---'],
                ...data?.placeholder3?.[locale].map((category) => [
                  category,
                  category,
                ]),
              ]}
            >
              <ErrorMessage component={StyledError} name="category" />
            </Input>
            <Input
              name="content"
              id="content"
              onChange={handleChange}
              value={values.content}
              labelTxt={data?.placeholder4?.[locale]}
              headerTxt={data?.title4?.[locale]}
              textarea={1}
            >
              <ErrorMessage component={StyledError} name="content" />
            </Input>
            <Input
              checkbox={1}
              name="acceptTerms"
              id="acceptTerms"
              onChange={handleChange}
              value={values.acceptTerms}
              labelTxt="I agree to the"
              labelComponent={
                <StyledButton onClick={togglePolicy}>
                  Privacy Policy
                  {isPolicyVisible && (
                    <TextModal
                      txt={data?.privacyPolicyParagraphs?.[locale]}
                      closeModal={togglePolicy}
                    />
                  )}
                </StyledButton>
              }
            >
              <ErrorMessage component={StyledError} name="acceptTerms" />
            </Input>
            <StyledButtonBox>
              <StyledSubmitButtonBox submitting={isSubmitting}>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  variant="cta"
                >
                  send
                </Button>
                <img src="/icons/spinner.svg" alt="spinner" />
              </StyledSubmitButtonBox>
              <Button onClick={resetForm} variant="noborder">
                clear
              </Button>
            </StyledButtonBox>
          </StyledForm>
        )}
      </Formik>
      {mailResponse !== null ? (
        <Portal>
          <SentMailPopUp
            togglePopup={handleSentMailFeedback}
            mailResponse={mailResponse}
          />
        </Portal>
      ) : null}
    </>
  );
};

MessageForm.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.array])
  ),
};

MessageForm.defaultProps = {
  data: {},
};

export default MessageForm;
