import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class gui4 extends JFrame{
	
	private JComboBox box;
	private JLabel picture;
	
 private static String[] filename = {"download.jpg","download.jpg"};
 
 private Icon[] pics = {new ImageIcon(getClass().getResource(filename[0]))};
 
 public gui4()
 {
	 
	 super("the title");
	 setLayout(new FlowLayout());
	 
	 box = new JComboBox(filename);
	 
	 box.addItemListener(
	 new ItemListener(){
	  public void itemStateChanged(ItemEvent event)
	{
	     if(event.getStateChange() == ItemEvent.SELECTED)
	 picture.setIcon(pics[box.getSelectedIndex()]);
		 }
		 }
 );
 
 add(box);
 picture = new JLabel(pics[0]);
 add(picture);
 
  }
}