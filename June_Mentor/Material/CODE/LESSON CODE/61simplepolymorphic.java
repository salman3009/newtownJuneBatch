class simplepolymorphic
{
	public static void main(String[] args)
	{
		polyanimal[] thelist = new polyanimal[2];
		
		polydog d = new polydog();
		
		polyfish f = new polyfish();

         thelist[0] = d;

         thelist[1]	= f;

        for(polyanimal x: thelist)
		{
			x.noise();
		}			
	}
	
}