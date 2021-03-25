package back;

import java.util.ArrayList;
import java.util.Iterator;

public class Diary {
    private ArrayList<Pick> picks = new ArrayList<>();  // Creación del array list
    private int num;
    private double und;
    private double bank;


    public void create(Pick t){
        Pick nuevo = new Pick(t.getDescripcion(), t.getTipster(), t.getResultado(), t.getId(), t.getCasa(), t.getCuota(), t.getDeporte(), t.getStake(), t.getU());
        picks.add(nuevo);
        num++;
    }

    public void delete(int p) {
        Iterator<Pick> it= picks.iterator();
        while (it.hasNext()) {
            if (it.next().getId() == p) {
                it.remove();
                num--;
            }
        }
    }

    public double getU(){
        double unidades = 0;

        Iterator<Pick> it= picks.iterator();
        while (it.hasNext()) {
            unidades += it.next().getU();
        }

        return unidades;
    }

    public double getY(){
        double u = getU();
        double s = getStk();

        return (u/(s*num)) * 100;
    }


    public double getB(){
        double unidades = 0;

        Iterator<Pick> it= picks.iterator();
        while (it.hasNext()) {
            unidades += it.next().getU();
        }

        return unidades * und;
    }

    public double getOdds(){
        double odds = 0;
        int contador = 0;

        Iterator<Pick> it= picks.iterator();
        while (it.hasNext()) {
            odds += it.next().getCuota();
            contador++;
        }

        odds = odds/contador;
        return odds;
    }

    public double getStk(){
        double stk = 0;
        int contador = 0;

        Iterator<Pick> it= picks.iterator();
        while (it.hasNext()) {
            stk += it.next().getStake();
            contador++;
        }

        stk = stk/contador;
        return stk;
    }


    public ArrayList<Pick> getPicks() {
        return picks;
    }

    public int getNum() {
        return num;
    }

    public double getUnd() {
        return und;
    }

    public double getBank() {
        return bank;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public void setUnd(double und) {
        this.und = und;
    }

    public void setBank(double bank) {
        this.bank = bank;
    }
}

