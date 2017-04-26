/* ☕ - this little coffe-cup keeps this file "Not-ASCII", and me awake :) */
(function(window, document, textarea, iframe, b64_to_string, string_to_b64, DEFAULT_VALUE){ "use strict";
  
  /*change handler*/
  function change_handler(){
    if(textarea.lastvalue === textarea.value) return true;
    iframe.src    = "data:text/html;charset=UTF-8;base64," + string_to_b64(textarea.value);   //send content as BASE64.
  //iframe.src    = "data:text/html;charset=UTF-8," + encodeURIComponent(textarea.value);     //send content as escaped-HTML.
  //iframe.srcdoc = textarea.value;                                                           //send content as HTML5's srcdoc attribute - domainless!
    textarea.lastvalue = textarea.value;
    localStorage.setItem("lastvalue", string_to_b64(textarea.value));
  }
  
  textarea.addEventListener("keyup",  change_handler, {capture: false, passive: true});
  textarea.addEventListener("change", change_handler, {capture: false, passive: true});

  /*initial value*/
  textarea.value = b64_to_string(localStorage.getItem("lastvalue") || DEFAULT_VALUE);
  change_handler();
}(
 self
,self.document
,self.document.querySelector("textarea")
,self.document.querySelector("iframe")
,function(string){ return decodeURIComponent(escape(atob(   string  ))); } //b64_to_string
,function(string){ return btoa(unescape(encodeURIComponent( string  ))); } //string_to_b64
,"PCFkb2N0eXBlIGh0bWw+CjxodG1sIGl0ZW1zY29wZT0iIiBpdGVtdHlwZT0iaHR0cDovL3NjaGVtYS5vcmcvV2ViUGFnZSIgZGlyPSJsdHIiIGxhbmc9ImVuLVVTIiBsYW5ndWFnZT0iRW5nbGlzaCIgY2hhcnNldD0iVVRGLTgiIGVuY29kaW5nPSJVVEYtOCI+CjxoZWFkPgogIDxtZXRhIGh0dHAtZXF1aXY9IlgtVUEtQ29tcGF0aWJsZSIgY29udGVudD0iSUU9ZWRnZSxjaHJvbWU9MSIvPgogIDxtZXRhIGh0dHAtZXF1aXY9IkNvbnRlbnQtVHlwZSIgICAgY29udGVudD0idGV4dC9odG1sO2NoYXJzZXQ9VVRGLTgiLz4KICA8bWV0YSBuYW1lPSJmcmFnbWVudCIgICAgICAgICAgICAgIGNvbnRlbnQ9IiEiLz4KICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgICAgICAgICAgICAgIGNvbnRlbnQ9ImhlaWdodD1kZXZpY2UtaGVpZ2h0LGluaXRpYWwtc2NhbGU9MS4wLG1heGltdW0tc2NhbGU9MS4wLG1pbmltdW0tc2NhbGU9MS4wLHVzZXItc2NhbGFibGU9bm8sd2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltYWwtdWkiLz4KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiIG1lZGlhPSJhbGwiPgogIC8qPCFbQ0RBVEFbKi8KICBAY2hhcnNldCAiVVRGLTgiOwogIEBuYW1lc3BhY2UgImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiOwogICp7CiAgICBib3gtc2l6aW5nOiAgICAgICAgICAgICAgICAgICBib3JkZXItYm94OwogICAgdGV4dC1zaXplLWFkanVzdDogICAgICAgICAgICAgICAgICAgYXV0bzsKICB9CiAgaHRtbCxib2R5ewogICAgaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwJTsKICAgIHdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCU7CiAgICBwYWRkaW5nOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwOwogICAgbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDsKICB9CiAgaHRtbHsgCiAgICBmb250OiAgICAgIDIwcHQgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlOwogIH0KICBib2R5ewogICAgYmFja2dyb3VuZDogICAgICAgICAgICAgICBub25lIGxpZ2h0Ymx1ZTsKICB9CiAgLypdXT4qLwo8L3N0eWxlPgo8L2hlYWQ+Cjxib2R5PgogIDxzY3JpcHQgdHlwZT0iYXBwbGljYXRpb24vamF2YXNjcmlwdCI+CiAgICAvKjwhW0NEQVRBWyovCiAgICAoZnVuY3Rpb24od2luZG93LGRvY3VtZW50KXsKICAgICAgInVzZSBzdHJpY3QiOwoKICAgICAgY29uc29sZS5sb2coImhlbGxvIik7CiAgICB9KHNlbGYsIHNlbGYuZG9jdW1lbnQpKTsKICAgIC8qXV0+Ki8KICA8L3NjcmlwdD4KPC9ib2R5Pgo8L2h0bWw+"
));
