exports.index = (req, res) => {
  console.log(req.params)

  return res.json({
    message: "ok"
  })
}

exports.store = (req, res) => {

}