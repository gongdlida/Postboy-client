Request Header Options

해당 리스트 순서는 Public Request Table sheet의 순서로 구성되어 있습니다.
[https://github.com/codestates/postboy/tree/master/public]
또한 중간에 리스트에 넣어야 하는 항목들이 많은 것이 있기에 반복문을 사용하여 <select> 태그 안에 넣어주는 것이 좋을 것 같습니다.
일단 기본적으로 모두 bracket case 안에 넣어놓겠습니다.

- User-Agent
  [PostBoy]

      <div>
        <label className="Accept">Content-Type</label>
        <select>
          <option>--select option--</option>
          <option>PostBoy</option>
        </select>
      </div>

- Accept
  [*/*]
  Accept는 모든 타입 처리 가능으로 하겠습니다~ (23번줄에 있는 설정이 모든 타입 가능 입니다.)

- Connection

let Connection = [keep-alive,close]

 <div>
      <label className="Accept">Content-Type</label>
      <select>
        <option>--select option--</option>
        <option>keep-alive</option>
        <option>close</option>
      </select>
    </div>

- Accept encoding
  [gzip,deflate,br]

Accept encoding beginner에선 위의 값을 default 값으로 주겠습니다.

- beginner Content-type option
  let content_Type_Beginner = [
  '--APPLICATION TYPE--,
  'application/json',
  'application/javascript',
  'application/pdf',
  'application/sql',
  'application/xml',
  'application/zip',
  '--AUDIO TYPE--',
  'audio/mpeg',
  'audio/ogg',
  '--FILE TYPE--',
  'image/gif',
  'image/jpeg',
  'image/png',
  'multipart/form-data',
  '---TEXT TYPE---',
  'text/css',
  'text/html',
  'text/plain',
  'text/xml'
  ]'

- proficiant option
  let content_Type_Proficiant =[
  '--APPLICATION TYPE--',
  'application/json',
  'application/graphql',
  'application/javascript',
  'application/ld+json',
  'application/msword',
  'application/pdf',
  'application/sql',
  'application/vnd.api+json',
  'application/vnd.ms-excel',
  'application/vnd.ms-powerpoint',
  'application/vnd.oasis.opendocument.text',
  'application/x-www-form-urlencoded',
  'application/xml',
  'application/zip',
  'application/zstd',
  '--AUDIO TYPE--',
  'audio/mpeg',
  'audio/ogg',
  '--FILE TYPE--',
  'image/gif',
  'image/apng',
  'image/flif',
  'image/webp',
  'image/x-mng',
  'image/jpeg',
  'image/png',
  'multipart/form-data',
  '---TEXT TYPE---',
  'text/css',
  'text/csv',
  'text/html',
  'text/php',
  'text/plain',
  'text/xml'
  ]
