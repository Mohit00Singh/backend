const asyncHandler = (reqHandler) => {
   (req, res, next) => {
    Promise.resolve(reqHandler(req, res, next)).catch((err) => next(err))  // promise invoked and then resolved
   }
}

export default asyncHandler


//higher order func
// const asyncHandler = (fn) => async (req, res, next) => {
//   try{
//     await fn(req, res, next)

//   } catch(error)
//   {
//     res.status(err.code || 500).json({
//         success: false,  // for frontend
//         message: err.message
//     })
//   }
// }