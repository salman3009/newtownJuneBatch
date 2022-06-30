import javax.swing.*;

class drawing{
	
	public static void main(String[] args)
	{
		JFrame f = new JFrame("title");
		
		f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		peach p = new peach();
		
		f.add(p);
		
		f.setSize(400,250);
		
		f.setVisible(true);
	}
}