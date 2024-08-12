import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sampletable1", { schema: "nest" })
export class Sampletable1 {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id!: number;

  @Column("varchar", { name: "title", length: 255 })
  title!: string;

  @Column("text", { name: "content", nullable: true })
  content!: string | null;

  @Column("text", { name: "tags" })
  tags!: string;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updated_at!: Date;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at!: Date;
}
