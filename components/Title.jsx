export default function Title() {
    return (
        <div className='Main_area'>          
            <figcaption className="Explain_box">
              <img className="Postboy" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Feapf5u%2FbtqRghRXLex%2FRqTKOCPkkkKPiAKw48IJLk%2Fimg.png"></img>
              <div className="Explain">“A Simple HTTP Client”</div>
              <div className="Who_made">Made by </div>
              <div className="Member">백도현(조장), 김민국, 함승균, 이준희”</div>          
            </figcaption> 
            <div className="SendMessage">    
             <select className="Select_menu">
               <option>POST</option>
               <option>GET</option>
             </select>
             <textarea className="SendText"></textarea>
             <button className="StartFetch">실행</button>
             </div>  
             <div>
               <div className="Request_Respond">
          <div className="Request_box">
            <div>Request</div>
            <textarea className=""></textarea>
            <div>
            <select className="">
              <option>임시1</option>
            </select>
            <select className="">
              <option>임시2</option>
            </select>
            <select className="">
              <option>임시3</option>
            </select>
            <select className="">
              <option>임시4</option>
            </select>
            </div>
          </div>
          <div className="Respond_box">
            <div>Respond</div>
            <textarea className=""></textarea>
          </div>
          </div>
        </div> 
        </div>
    )
}
{/* <figure class="md:flex bg-yellow-100 rounded-xl p-8 md:p-0 w-full ">
  <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-xl rounded-full mx-auto " 
  src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbPBq5n%2FbtqQ1MDR4ej%2FpXMloFV8vLbtEFiklOv2ok%2Fimg.png" 
  alt="이미지를 찾을 수 없습니다." width="384" height="512" ></img>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <h1 class="text-lg font-semibold">
        “A simple HTTP Client”
      </h1>
    </blockquote>
    <figcaption class="font-medium text-lg">
      <div class="text-cyan-600">
        Postboy
      </div>
      <div class="text-gray-500">
        made by - 백도현(조장), 김민국, 함승균, 이준희
      </div>
    </figcaption>
  </div>
</figure> */}