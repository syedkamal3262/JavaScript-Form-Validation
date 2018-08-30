function myfun()
{
	var a=document.getElementById("name").value;
	var b=document.getElementById("email").value;
	var pwd=document.getElementById("pwd").value;
	var cpwd=document.getElementById("cpwd").value;

if(a=="")
	{
	document.getElementById("message").innerHTML="***Don't left Textfield Empty***";
	return false;
	}	
if(b.indexOf('@')<= 0)
	{
	document.getElementById("msg").innerHTML="***Invalid Email***";
	return false;
	}	

if (pwd.length < 8)
       {
		   document.getElementById("size").innerHTML="***Password must be greater than 8 Characters***";
			return false;
	   }
if (cpwd != pwd)
       {
		   document.getElementById("match").innerHTML="***Password not Matched***";
			return false;
	   }

}	 