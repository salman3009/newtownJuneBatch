class buildingconstructor{
	public static void main(String[] args)
	{
		tuna6 tunaobject = new tuna6();
		tuna6 tunaobject2 = new tuna6(5);
		tuna6 tunaobject3 = new tuna6(5,13);
		tuna6 tunaobject4 = new tuna6(5,3,43);
		
		System.out.printf("%s\n",tunaobject.tomilitary());
		System.out.printf("%s\n",tunaobject2.tomilitary());
		System.out.printf("%s\n",tunaobject3.tomilitary());
		System.out.printf("%s\n",tunaobject4.tomilitary());
		
	}
	
	
}