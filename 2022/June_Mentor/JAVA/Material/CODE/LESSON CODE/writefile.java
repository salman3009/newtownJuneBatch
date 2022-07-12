import java.io.*;
import java.lang.*;
import java.util.*;

public class writefile{
	
	private Formatter x;
	
	public void openfile()
	{
		try{
			  x=new Formatter("chinese.txt");
		}
		catch(Exception e)
		{
			System.out.println("you hava an error");
		}
	}
		public void addrecords()
		{
			x.format("%s%s%s","20","bucky","roberst");
		}
		public void closefile()
		{
			x.close();
		}
	}
	
