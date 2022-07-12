class seriesfinal{
	
	public static void main(String args[])
	{
		String a = "apples";
		String b = "bucky";
		String c = "BUCKY";
		
		System.out.println(a.length());
		
		if(a.equals("apples"))
		{
			System.out.println("it equals apples");
		}
		if(b.equalsIgnoreCase(c))
		{
			System.out.println("buck match");
		}
	}
}