import java.awt.*;
import java.awt.event.*;
import javax.swing.*;


public class gui8 extends JFrame{
	
	private String details;
	private JLabel statusbar;
	
	public gui8()
	{
		super("hello");
		statusbar = new JLabel("this is default");
		add(statusbar,BorderLayout.SOUTH);
		addMouseListener(new mouseclass());
	}
	private class mouseclass extends MouseAdapter{
		
		public void mouseClicked(MouseEvent event)
		{
			details = String.format("you clicked %d",event.getClickCount());
			
			
			if(event.isMetaDown())
				details +="with right mouse button";
			else if(event.isAltDown())
				details +="either center mouse button";
			else
				details +="with left mouse button";
			    statusbar.setText(details);
		}
	}
	
}