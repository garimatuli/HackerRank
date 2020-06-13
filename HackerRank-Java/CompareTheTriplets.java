
// Que Link : https://www.hackerrank.com/challenges/compare-the-triplets/problem
// Author : Garima Tuli

import java.io.*;
import java.util.*;

public class CompareTheTriplets {
    static List<Integer> compareTriplets(List<Integer> a, List<Integer> b) {
        int aTotal = 0, bTotal = 0;
        List<Integer> resultList = new ArrayList<>();
        for (int i = 0; i < a.size(); i++){
            if(a.get(i) - b.get(i) < 0)
                bTotal++;
            else if(a.get(i) - b.get(i) > 0)
                aTotal++;
        }
        resultList.add(aTotal++);
        resultList.add(bTotal++);
        return resultList;
    }

    public static void main(String[] args) throws IOException {
        List<Integer> a = new ArrayList<>();
        List<Integer> b = new ArrayList<>();
        a.addAll(Arrays.asList(1, 2, 3));
        b.addAll(Arrays.asList(3,2,1));
        System.out.println("input list a -> "+a);
        System.out.println("input list b -> "+b);
        System.out.println("Comparing Triplets = "+ compareTriplets(a,b));
    }

}
