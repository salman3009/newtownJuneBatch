import java.util.EnumSet;
class enumeration{
        public static void main(String[] args)
		{
		   for(tuna8 people : tuna8.values())
		   System.out.printf("%s \t %s \t %s \n",people,people.getdesc(),people.getyear());
		  
		  
		  System.out.println("\n And now for the range of constant !!!\n");
		  
		  
		  for(tuna8 people : EnumSet.range(tuna8.kelsey,tuna8.candy))
			  System.out.printf("%s \t %s \t %s \n",people,people.getdesc(),people.getyear());
		
		}
}