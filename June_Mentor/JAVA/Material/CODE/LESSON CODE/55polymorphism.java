class polymorphism{
	
	public static void main(String[] args)
	{
		/*code for 55
		poly3 bucky[] = new poly3[2];
		
		bucky[0] = new poly2();
		
		bucky[1] = new poly1();
		
		for(int x=0; x<2 ; ++x)
		{
			bucky[x].eat();
			
		}
		*/
		
		// code for 56
		  
		  poly4 bucky = new poly4();
		  
		  poly3 fo = new poly3();
		  
		  poly3 po = new poly2();
		  
		  bucky.digest(fo);
		  
		  bucky.digest(po);
		
		
		
		
		
	}
	
}