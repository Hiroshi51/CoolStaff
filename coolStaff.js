 /*******************************************************************
  * Name   : coolStaff
  * Author : Hiroshi51
  * ver    : 0.0.1
  *******************************************************************/
(function ( $ ) {
$.fn.coolStaff = function(settingOption) {
	
var positionTop       = -10;
var positionSideLeft  = 0;
var positionSideRight = 0;
var positionSideTop   = 0;
var centerTop         = 110;
var centerLeft        = 110;

positionSideTop   = centerTop - Math.ceil((centerTop - positionTop) * 0.71);
positionSideLeft  = centerLeft - Math.ceil((centerTop - positionTop) * 0.71);
positionSideRight = centerLeft + Math.ceil((centerTop - positionTop) * 0.71);
this.flag = 0;

this.siblings('.satelite').children('a').on('mouseenter', function(){
	 
	 $(this).animate({
		 opacity: "0.5"
	 },200);
 });

this.siblings('.satelite').children('a').on('mouseleave', function(){
	
	 $(this).animate({
		 opacity: "1"
	 },200);
 });

this.on("click",function(){
  if (this.flag != 1)
  {
   //define picture animation
   $(this).children('img.fadeInPic').animate({
	   top: "0px",
	      },300); 
		  
   //define staffBlog animation
   $(this).siblings('.staffBlog').children('a').animate({
	   top: positionTop+"px",
	   opacity: "1"
	      },400); 
   
   //define staffSns animation	  
   $(this).siblings('.staffSns').children('a').animate({
	   left: positionSideRight+"px",
	   top : positionSideTop+"px",
	    opacity: "1"
	      },600); 
  
   //define staffMail animation	  
   $(this).siblings('.staffTwitter').children('a').animate({
	   top  : positionSideTop+"px",
	   left : positionSideLeft+"px",
	    opacity: "1"
	      },200); 	
  this.flag = 1;

  }
  
  else if (this.flag == 1)
  {
	  
	//define picture animation
    $(this).children('img.fadeInPic').animate({
	   top: "200px"
	      },500); 
	
    //define all the satelite animation
    $(this).siblings('.satelite').children('a').animate({
	   top : centerTop+"px",
	   left: centerLeft+"px",
	   opacity: "0"
     },500); 
	  
	  	
  this.flag = 0;
	  
  }
  
});

return this;
}; 
}( jQuery ));

