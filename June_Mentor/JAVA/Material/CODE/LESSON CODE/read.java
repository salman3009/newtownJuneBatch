import java.io.*;
import java.util.*;

public class read{
	
	private Scanner x;
	
	public void openfile()
	{
		try{
			x = new Scanner(new File("french.txt"));
		}
		catch(Exception e)
		{
			System.out.println("could not find file");
		}
	}
	
	public void readfile()
	{
		while(x.hasNext())
		{
			String a = x.next();
			String b = x.next();
			String c = x.next();
			
			System.out.printf("%s %s %s \n",a,b,c);
		}
	}

	public void closefile()
	{
		x.close();
	}
	}