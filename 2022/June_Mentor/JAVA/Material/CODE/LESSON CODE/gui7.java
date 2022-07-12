import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class gui7 extends JFrame{
	
	private JPanel mousepanel;
	private JLabel statusbar;
	
	
	public gui7()
	{
		super("title");
		
		
		mousepanel = new JPanel();
		mousepanel.setBackground(Color.WHITE);
		add(mousepanel,BorderLayout.CENTER);
		
		statusbar = new JLabel("default");
		
		add(statusbar,BorderLayout.SOUTH);
		
		Handlerclass handler = new Handlerclass();
		mousepanel.addMouseListener(handler);
		
		mousepanel.addMouseMotionListener(handler);
	}
		
	private class Handlerclass implements MouseListener,MouseMotionListener{
		    
			  public void mouseClicked(MouseEvent event)
			  {
				  statusbar.setText(String.format("clicked at %d %d",event.getX(),event.getY()));
			  }
		
  public void mousePressed(MouseEvent event)
  {
	  statusbar.setText("you pressed down the mouse");
  }
  
  public void mouseReleased(MouseEvent event)
  {
	  statusbar.setText("you released the button");
  }
  public void mouseEntered(MouseEvent event)
  {
	  statusbar.setText("you enterd the teat");
	  mousepanel.setBackground(Color.RED);
	  }
	  
	public void mouseExited(MouseEvent event)
	{
		statusbar.setText("the mouse has left he window");
	   mousepanel.setBackground(Color.WHITE);
	
	}

	//these are mouse motion event
	
	public void mouseDragged(MouseEvent event)
	{
		statusbar.setText("you are dragging the mouse");
	}
public void mouseMoved(MouseEvent event)
{
	statusbar.setText("you moved the mouse");
}
	}
	}
	
