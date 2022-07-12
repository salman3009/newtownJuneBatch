import java.util.*;

class creatingfile{
	
	public static void main(String[] args)
	{
		final Formatter x;
		
		try{
			
			x = new Formatter("fred.txt");
			System.out.println("you ordered a file");
		}
		catch(Exception e)
		{
			System.out.println("you got an error");
		}
	}
}