/*import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class TestDatabaseConnection {

    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/gestion_cabinet_medical";
        String username = "root";
        String password = "nedjm";
        String driverClassName = "com.mysql.cj.jdbc.Driver";

        try {
            // Charger le driver JDBC
            Class.forName(driverClassName);

            // Établir la connexion
            Connection connection = DriverManager.getConnection(url, username, password);
            System.out.println("Connexion réussie!");

            // Fermer la connexion
            connection.close();
        } catch (ClassNotFoundException e) {
            System.out.println("Erreur: Driver JDBC non trouvé.");
            e.printStackTrace();
        } catch (SQLException e) {
            System.out.println("Erreur: Impossible de se connecter à la base de données.");
            e.printStackTrace();
        }
    }
}*/

package config;

import java.sql.Connection;
import java.sql.SQLException;

public class TestDatabaseConnection {

    public static void main(String[] args) {
        try {
            Connection connection = DatabaseConfig.getConnection();
            System.out.println("Connexion réussie!");
            connection.close();
        } catch (SQLException e) {
            System.out.println("Erreur: Impossible de se connecter à la base de données.");
            e.printStackTrace();
        }
    }
}

