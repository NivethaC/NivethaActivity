package runnerclass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"D:\\Eclipse\\NivethaActivity\\src\\main\\resources\\Login.feature"},
		glue="stepdeff",
	    plugin = {"pretty","html:target/cucumber-reports"}
		)	
public class RunnerClass {

}
