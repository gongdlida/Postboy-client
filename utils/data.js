let resList = [
  "Url",
  "Method",
  "Status Code",
  "Content-Length",
  "Content-Type",
  "Content-Encoding",
  "Date",
];

let user_Agent = ["POSTBOY"];

let accept = ["*/*"];

let accept_Encoding = ["gzip,deflate,br"];

let accept_Language = ["utf-8"];

let connection = ["keep-alive", "close"];

let withCredentials = ["OPTIONAL", "true", "false"];

let content_Type_Beginner = [
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
];

export {resList, user_Agent, accept, accept_Encoding, accept_Language, connection, content_Type_Beginner, withCredentials}