public enum tuna8{
	
	bucky("nice","22"),
	kelsey("cutie","10"),
	julia("bigmistake","12"),
	salman("bigblow","23"),
	candy("cute","55"),
	khizar("mass","22");
	
	private final String desc;
	
	private final String year;
	
	tuna8(String description,String birthday)
	{
		desc = description;
		year = birthday;
	}
	
	public String getdesc()
	{
		return desc;
	}
	
	public String getyear()
	{
		return year;
	}
	
}