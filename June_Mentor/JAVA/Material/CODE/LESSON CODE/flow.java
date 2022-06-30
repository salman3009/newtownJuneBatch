import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class flow extends JFrame{
	
	  private JButton lb;
	  private JButton cb;
	  private JButton rb;
	  
	  private FlowLayout layout;
	  private Container container;
	  
	  public flow()
	  {
		  super("the title");
		  layout = new FlowLayout();
		  
		  container = getContentPane();
		  
		  setLayout(layout);
		  
		  //left stuff in here
		  
		  lb = new JButton("left");
		  add(lb);
		  
		  lb.addActionListener(
		     new ActionListener(){
				 public void actionPerformed(ActionEvent event)
				 {
					 layout.setAlignment(FlowLayout.LEFT);
					 layout.layoutContainer(container);
				 }
			 }
		  );
		  
		  //center stuff in here
		  
		  lb = new JButton("center");
		  add(lb);
		  
		  lb.addActionListener(
		     new ActionListener(){
				 public void actionPerformed(ActionEvent event)
				 {
					 layout.setAlignment(FlowLayout.CENTER);
					 layout.layoutContainer(container);
				 }
			 }
		  );
//right stuff in here
		  
		  lb = new JButton("right");
		  add(lb);
		  
		  lb.addActionListener(
		     new ActionListener(){
				 public void actionPerformed(ActionEvent event)
				 {
					 layout.setAlignment(FlowLayout.RIGHT);
					 layout.layoutContainer(container);
				 }
			 }
		  );


		  }
}