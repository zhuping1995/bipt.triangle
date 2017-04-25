var triangle = {
    isEquilateral : function(a,b,c) {
    	    if(a!=b) return false ; 
    	    if(b!=c) return false ;
			if(c!=b) return false ;
    	    if(a<=0) return false ;
			if(b<=0) return false ;
			if(c<=0) return false ;
    		return true ;
    },
    isIsosceles : function(a,b,c) 
	{
    	    if(a!=b) if(a!=c) if(b!=c) return false;
			if(a<=0) return false ;
			if(b<=0) return false ;
			if(c<=0) return false ;
			if(a+b<=c) return false ;
			if(a-b>=c) return false ;
			return true ;
    },
	isScalene : function(a,b,c)
	{
	        if(a<=0) return false ;
			if(b<=0) return false ;
			if(c<=0) return false ;
	        if(a+b<=c) return false ;
			if(a-b>=c) return false ;
			return true ;
	}
};

