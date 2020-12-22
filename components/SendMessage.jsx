
export default function SendMessage() {
    return (
        <div class="md:flex bg-yellow-200 h-flex w-full">
        <div class="relative inline-block text-left ">
          <div>
            <select class="inline-flex justify-center w-full rounded-md border border-gray-300
            shadow-sm px-7 py-4 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50
            ">      
            <option>POST</option>
            <option>GET</option>
            </select>
          </div>
          <textarea></textarea>
          <button class="border border-gray-400 bg-white">실행</button>
        </div>
      </div>
    )
}