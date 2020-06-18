// Count number of occurrences of each letter in a string
// Input = "United States of America"
// Output = {a=3, c=1, d=1, e=3, f=1, i=2, m=1, n=1, o=1, r=1, s=2, t=3, u=1}

import java.util.HashMap;
import java.util.Map;

public class StringLettersCount {

    public static void letterCount(String str){
        Map<Character,Integer> countMap = new HashMap<>();

        for (int i = 0 ; i < str.length(); i++) {
            char c = str.charAt(i);

            if (countMap.containsKey(c))
                countMap.put(c, countMap.get(c)+1);
            else
                countMap.put(c, 1);
        }

        System.out.println("Printing Hashmap = "+ countMap);
        System.out.println();

        System.out.println("Using forEach + lambda expression");
        countMap.forEach((key,value) -> System.out.println(key + " : " +value));

        // Using for each loop
        // var can be used if you are not sure about the type
        // Here we can instead do char key and int value
        System.out.println("Using for each loop");
        for (var key : countMap.keySet()) {
            System.out.println("key: " + key);
        }

        for (var value : countMap.values()) {
            System.out.println("value: " + value);
        }

    }

    public static void main(String args[]){
        String strInput = "United States of America";
        System.out.println("Input String = " + strInput);

        // converting to lowercase and remove spaces from string
        String str = strInput.toLowerCase().replaceAll(" ","");
        System.out.println("Modified String = " + str);
        letterCount(str);
    }

}

