import java.awt.FlowLayout;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JFrame;
import javax.swing.JButton;
import javax.swing.Icon;
import javax.swing.ImageIcon;
import javax.swing.JOptionPane;

public class gui extends JFrame{
	
	private JButton reg;
	
	private JButton custom;
	
	public gui()
	{
		super("the title");
		setLayout(new FlowLayout());
		
		reg = new JButton("reg button");
		add(reg);
		
		Icon b = new ImageIcon(getClass().getResource("download.jpg"));
		
		Icon x = new ImageIcon(getClass().getResource("download.jpg"));
		
		custom = new JButton("custom",b);
		
		custom.setRolloverIcon(x);
		add(custom);
		
		handlerclass handler = new handlerclass();
		
		reg.addActionListener(handler);
		custom.addActionListener(handler);
		
	}
	
private class handlerclass implements ActionListener{
	public void actionPerformed(ActionEvent event)
	{
		
		JOptionPane.showMessageDialog(null,String.format("%s",event.getActionCommand()));
		
	}
}
}
	
