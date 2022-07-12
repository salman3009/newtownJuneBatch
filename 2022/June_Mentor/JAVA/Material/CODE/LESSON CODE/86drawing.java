import javax.swing.*;
import java.awt.*;

class drawing{
	
	public static void main(String[] args)
	{
		JFrame f = new JFrame("title");
		f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		peach3 p = new peach3();
		
		p.setBackground(Color.WHITE);
		f.add(p);
		f.setSize(500,270);
		f.setVisible(true);
	}
}