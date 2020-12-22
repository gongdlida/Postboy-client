
export default function SendMessage() {
    return (
        <div class="md:flex bg-yellow-200 h-flex w-full flex flex-wrap">
          <div class="relative inline-block text-left">
            <div>
              <select class="inline-flex justify-center w-1/6 rounded-md border border-gray-300
              shadow-sm px-7 py-4 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50
              ">      
              <option>POST</option>
              <option>GET</option>
              </select>
            <textarea class="line-flex w-36"></textarea>
            </div>
          <button class="w-12 border border-gray-400 bg-white">실행</button>
        </div>
      </div>
    )
}