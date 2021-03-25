package back;

import com.google.gson.Gson;

import java.io.*;

public class LJson {

    public static void GenerarJson(Diary v) throws IOException {
        Gson gson= new Gson();
        String json = gson.toJson(v);
        File f = new File("Diary.json");
        String canonical = f.getCanonicalPath();

        File borrado = new File(canonical);//Ruta donde se va a borrar el Json
        borrado.delete();
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(canonical))) {// Ruta de la creacion
            bw.write(json);
        } catch (IOException ex) {
        }
    }
}
