package org.vaadin.example;

import back.Diary;
import back.LJson;
import back.Pick;
import com.google.gson.Gson;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.menubar.MenuBar;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.upload.FileRejectedEvent;
import com.vaadin.flow.data.renderer.NumberRenderer;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.PWA;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.*;
import java.time.LocalDate;

/**
 * A sample Vaadin view class.
 * <p>
 * To implement a Vaadin view just extend any Vaadin component and
 * use @Route annotation to announce it in a URL as a Spring managed
 * bean.
 * Use the @PWA annotation make the application installable on phones,
 * tablets and some desktop browsers.
 * <p>
 * A new instance of this class is created for every new user and every
 * browser tab/window.
 */
@Route
@PWA(name = "Vaadin Application",
        shortName = "Vaadin App",
        description = "This is an example Vaadin application.",
        enableInstallPrompt = false)
@CssImport("./styles/shared-styles.css")
@CssImport("./styles/style.css")
@CssImport(value = "./styles/grid.css", themeFor = "vaadin-grid")
@CssImport(value = "./styles/vaadin-text-field-styles.css", themeFor = "vaadin-text-field")
public class MainView extends VerticalLayout {

    private TextArea descripcion;
    private NumberField stake;
    private NumberField cuota;
    private Button button;

    public MainView(@Autowired GreetService service) throws IOException {
        Select<String> resultado = new Select<>();
        Select<String> tipster = new Select<>();
        Select<String> casa = new Select<>();
        Select<String> deporte = new Select<>();
        HorizontalLayout total = new HorizontalLayout();
        HorizontalLayout inicio = new HorizontalLayout();
        HorizontalLayout layout = new HorizontalLayout();
        VerticalLayout a = new VerticalLayout();
        VerticalLayout b = new VerticalLayout();
        HorizontalLayout layout1 = new HorizontalLayout();
        HorizontalLayout layout2 = new HorizontalLayout();

        String json = "";
        FileReader fl = new FileReader("Diary.json");
        BufferedReader br = new BufferedReader(fl);
        String linea;
        while ((linea = br.readLine()) != null) {
            json += linea;
        }
        Gson gson = new Gson();
        Diary lista = gson.fromJson(json, Diary.class);

        Grid<Pick> grid = new Grid<>();
        Grid<Diary> grid2 = new Grid<>();

        NumberField unidad = new NumberField("Unidad");
        unidad.setValue(lista.getUnd());
        unidad.setHasControls(true);
        unidad.setMin(1);
        unidad.setMax(100);

        NumberField bank = new NumberField("Bank Inicial");
        bank.setValue(lista.getBank());
        bank.setHasControls(true);
        bank.setMin(1);
        bank.setMax(10000);


        Button but = new Button("GUARDAR");
        but.setThemeName("primary");
        but.setWidth("150px");
        but.setHeight("30px");

        but.addClickListener(e -> {
            Notification.show("Unidad y bank fijados !");
            lista.setBank(bank.getValue());
            lista.setUnd(unidad.getValue());
            try {
                LJson.GenerarJson(lista);
            } catch (IOException ioException) {
                ioException.printStackTrace();
            }
        });

        inicio.add(unidad, bank);

        descripcion = new TextArea("Descripción");
        descripcion.setHeight("150px");
        descripcion.setWidth("460px");
        stake = new NumberField("Stake");
        cuota = new NumberField("Cuota");
        tipster.setLabel("Tipster");
        tipster.setItems("WTAgambler", "2Bets", "Sori");
        deporte.setLabel("Deporte");
        deporte.setItems("Tenis", "Fútbol", "Futsal", "Baloncesto");
        casa.setLabel("Casa");
        casa.setItems("Bet365", "MBet");
        resultado.setLabel("W/L/V");
        resultado.setItems("W", "L", "V");
        DatePicker fecha = new DatePicker();
        LocalDate now = LocalDate.now();
        fecha.setValue(now);
        button = new Button("AÑADIR");
        button.setThemeName("primary");
        button.setWidth("150px");
        button.setHeight("50px");

        b.setPadding(false);
        b.setMargin(false);

        layout.setPadding(false);
        layout.setMargin(false);

        layout1.setPadding(false);
        layout1.setMargin(false);

        b.add(stake, cuota, fecha);
        layout.add(descripcion,b);
        layout1.add(tipster, deporte, casa);
        layout2.add(casa, resultado);

        a.add(layout, layout1, layout2, button);

        button.addClickListener(e -> {
            Notification.show("Pick añadido");
        });

        Select<String> finalResultado = resultado;

        button.addClickListener(e -> {
            Pick t = new Pick(descripcion.getValue(), tipster.getValue(), finalResultado.getValue(), lista.getNum(), casa.getValue(), cuota.getValue(), deporte.getValue(), stake.getValue(), unidades(stake.getValue(), cuota.getValue(), finalResultado.getValue()));
            lista.create(t);
            grid.setItems(lista.getPicks());
            grid2.setItems(lista);
            try {
                LJson.GenerarJson(lista);
            } catch (IOException ioException) {
                ioException.printStackTrace();
            }
        });

        grid.setItems(lista.getPicks());
        grid.addColumn(Pick::getStake).setHeader("Stake").setWidth("100px");; //Columns created del grid
        grid.addColumn(Pick::getCuota).setHeader("Cuota").setWidth("100px");; //Columns created del grid
        grid.addColumn(Pick::getDescripcion).setHeader("Descripcion").setWidth("300px");
        grid.addColumn(Pick::getDeporte).setHeader("Deporte").setWidth("100px");
        grid.addColumn(Pick::getCasa).setHeader("Casa").setWidth("80px");
        grid.addColumn(Pick::getTipster).setHeader("Tipster").setWidth("80px");
        grid.addColumn(Pick::getResultado).setHeader("W/L/V").setWidth("50px"); //Columns created del grid
        grid.addColumn(Pick::getU).setHeader("Und").setWidth("50px"); //Columns created del grid
        grid.addComponentColumn(item -> new Button("Delete", clickEvent -> {
            lista.delete(item.getId());
            grid.setItems(lista.getPicks());
            grid2.setItems(lista);
            try {
                LJson.GenerarJson(lista);
            } catch (IOException e) {
                e.printStackTrace();
            }
        })).setWidth("100px");

        grid.setClassNameGenerator(customer -> {
            if (customer.getU() < 0) {
                return "error";
            }
            else if (customer.getU() == 0){
                return "";
            }
            else{
                return "success";
            }
        });

        grid2.setItems(lista);
        grid2.setHeightByRows(true);
        grid2.addColumn(Diary::getNum).setHeader("Picks").setWidth("50px");; //Columns created del grid
        grid2.addColumn(Diary::getU).setHeader("Profit").setWidth("50px");; //Columns created del grid
        grid2.addColumn(Diary::getY).setHeader("Yield").setWidth("50px");; //Columns created del grid
        grid2.addColumn(aa -> lista.getB()).setHeader("Beneficio");
        grid2.addColumn(new NumberRenderer<>(
                Diary::getOdds, "%(,.2f")).setHeader("Odd Avg").setWidth("50px");; //Columns created del grid
        grid2.addColumn(new NumberRenderer<>(
                Diary::getStk, "%(,.2f")).setHeader("Stake Avg").setWidth("50px");; //Columns created del grid
        grid2.addColumn(bb -> lista.getB() + bank.getValue()).setHeader("Bank Actual");
        grid2.setClassNameGenerator(customer -> {
            if (customer.getU() < 0) {
                return "error";
            }
            else{
                return "success";
            }
        });

        MenuBar menuBar = new MenuBar();
        menuBar.addItem("Home", e -> {
            add(inicio);
            add(grid2);
            remove(a);
            remove(grid);
        });

        menuBar.addItem("Picks", e -> {
            add(grid);
            remove(a);
            remove(grid2);
            remove(inicio);
        });

        menuBar.addItem("Añadir", e -> {
            add(a);
            remove(grid);
            remove(grid2);
            remove(inicio);
        });
        total.add(menuBar, but);
        add(total);
    }

    public double unidades(Double a, Double b, String c){
        double t;
        if (c.equals("W")){
            t = (a * b) - a;
        }
        else if (c.equals("L")){
            t = -a;
        }
        else
            t = 0;

        double roundDbl = Math.round(t*100.0)/100.0;
        return roundDbl;
    }

}
