import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("example_table", { schema: "nest" })
export class ExampleTable {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id!: number;

  @Column("varchar", { name: "name", nullable: true, length: 100 })
  name!: string | null;

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at!: Date | null;
}
