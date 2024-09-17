import { Pool } from "pg"; 

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://ads_gpa9_user:6YJOAMVSO38gdG0V3ZNHECxxphopwihT@dpg-cr75tc23esus738aon20-a.oregon-postgres.render.com/ads_gpa9";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;