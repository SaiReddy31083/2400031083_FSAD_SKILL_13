package klu.skill13;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3001")
public class AppController 
{
    @GetMapping("/message")
    public String message()
    {
        return "Backend is running successfully";
    }

    @GetMapping("/students")
    public List<String> students()
    {
        return List.of("Sai", "Ravi", "Teja", "Anu");
    }
}