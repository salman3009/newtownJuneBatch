public class animallist{
	
	private animal[] thelist = new animal[5];
	
	private int i=0;
	
	public void add(animal a)
	{
	
	if(i<thelist.length)
	{
		
		thelist[i] = a;
	       System.out.println("animal added at inded " +i);
            i++;      		   
	}
}
}
