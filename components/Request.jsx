
export default function Request() {
    return (
        <div class="md:flex bg-yellow-100 h-flex w-full">
          <div class="text-lg md:text-center font-semibold h-1/6 w-1/2">Request
            <textarea class="h-5/6 w-1/2"></textarea>
            <select class="md:flex w-1/2">
              <option>임시1</option>
            </select>
            <select class="md:flex w-1/2">
              <option>임시2</option>
            </select>
            <select class="md:flex w-1/2">
              <option>임시3</option>
            </select>
            <select class="md:flex w-1/2">
              <option>임시4</option>
            </select>
          </div>
          <div class="text-lg md:text-center font-semibold h-1/6 w-1/2">Respond
            <textarea class="h-5/6 w-1/2"></textarea>
          </div>
        </div> 
    )
}