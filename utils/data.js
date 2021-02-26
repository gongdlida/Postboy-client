let resList = [
  "Url",
  "Method",
  "Status Code",
  "Content-Length",
  "Content-Type",
  "Content-Encoding",
  "Date",
];

let options = { 
 user_Agent : ["POSTBOY"],
 accept : ["*/*"],
 accept_Encoding : ["gzip,deflate,br"],
 accept_Language : ["utf-8"],
 connection : ["keep-alive", "close"],
 withCredentials : ["OPTIONAL", "true", "false"],
 content_Type_Beginner : [
  "OPTIONAL",
  "application/json",
  "application/javascript",
  "application/pdf",
  "application/sql",
  "application/xml",
  "application/zip",
  "audio/mpeg",
  "audio/ogg",
  "image/gif",
  "image/jpeg",
  "image/png",
  "multipart/form-data",
  "text/css",
  "text/html",
  "text/plain",
  "text/xml",
]
}

export {resList, options}