import java.io.File;

class fileclass{
	public static void main(String[] args)
	{
		File x=new File("c:\\text\\new.txt");
		
	if(x.exists())
		System.out.println(x.getName() + "exist!");
	else
		System.out.println("this thing not exists");
	}
}