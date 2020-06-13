
// Que Link : https://www.hackerrank.com/challenges/diagonal-difference/problem
// Author : Garima Tuli

import java.io.*;
import java.util.*;

public class DiagonalDifference {
    public static int diagonalDiff(List<List<Integer>> arr) {
        // Write your code here
        int diagonal1 = 0, diagonal2 = 0, diff = 0;
        int n = arr.size();
        for ( int i = 0; i < n; i++){
            //System.out.println("d1 -> "+arr.get(i).get(i));
            diagonal1 = diagonal1 + arr.get(i).get(i);
            //System.out.println("d2 -> "+arr.get(n-1-i).get(i));
            diagonal2 = diagonal2 + arr.get(n-1-i).get(i);
        }
        diff = diagonal1 - diagonal2;
        return Math.abs(diff);
    }

    public static void main(String[] args) throws IOException {
        List<List<Integer>> x = new ArrayList<>();
        x.add(new ArrayList<>(Arrays.asList(11, 2, 4, 5)));
        x.add(new ArrayList<>(Arrays.asList(4, 5, 6, 5)));
        x.add(new ArrayList<>(Arrays.asList(10, 8, -12, 5)));
        x.add(new ArrayList<>(Arrays.asList(11, 2, 4, 6)));
        System.out.println("input -> "+x);
        System.out.println("diagonalDifference = "+diagonalDiff(x));
    }
}
