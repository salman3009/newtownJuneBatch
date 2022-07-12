public class tuna9{
	
	private String first;
	private String last;
	private static int member=0;
	
	public tuna9(String fn,String ln)
	{
		first = fn;
		last = ln;
		member++;
		System.out.printf("constructor for %s %s,members in the club:%d\n",first,last,member);
	}
	
	
	public String getfirst()
	{
		return first;
		
	}
	public String getlast()
	{
		return last;
	}
	public static int getmember()
	{
		return member;
	}
	
}