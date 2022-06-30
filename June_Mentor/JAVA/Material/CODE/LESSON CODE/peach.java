import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class peach extends JPanel{
	
	public void paintComponent(Graphics g)
	{
		super.paintComponent(g);
		this.setBackground(Color.WHITE);
		
		g.setColor(Color.BLUE);
		g.fillRect(25,25,100,30);
		
		g.setColor(new Color(190,81,215));
		g.fillRect(25,65,100,30);
		
		g.setColor(Color.RED);
		g.drawString("this is some text",25,120);
	}
}