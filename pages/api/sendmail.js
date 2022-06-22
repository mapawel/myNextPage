export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body);
    res.status(201).json({
      status: 'OK',
      message: 'Mail sent!',
    })
  } else {
    throw new Error('test error')
    // res.status(500).json({
    //   message: 'error message',
    // })
  }
}