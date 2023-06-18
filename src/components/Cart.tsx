
export default function Cart() {
  return (
    <div className="w-[90%] left-1/2 -translate-x-1/2 h-min min-h-[300px] sm:min-h-[150px] top-[90px] sm:max-w-[350px] sm:max-h-[250px] bg-white rounded-lg shadow-xl sm:inline-block absolute z-[100] sm:left-[80%]">
      <h3 className="p-5 font-semibold text-lg">Cart</h3>
      <hr />
      <div className="w-full min-h-[60%] absolute h-min flex place-content-center items-center">
        <p className="">Your Cart is empty</p>
      </div>
    </div>
  )
}
