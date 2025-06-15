export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      donors: {
        Row: {
          address: string | null
          age: number
          availability: boolean | null
          blood_group: string
          city: string
          created_at: string | null
          email: string | null
          emergency_contact: string | null
          full_name: string
          height: number | null
          id: string
          last_donation_date: string | null
          medical_conditions: string | null
          pdf_url: string | null
          phone_number: string
          state: string
          updated_at: string | null
          user_id: string
          weight: number | null
        }
        Insert: {
          address?: string | null
          age: number
          availability?: boolean | null
          blood_group: string
          city: string
          created_at?: string | null
          email?: string | null
          emergency_contact?: string | null
          full_name: string
          height?: number | null
          id?: string
          last_donation_date?: string | null
          medical_conditions?: string | null
          pdf_url?: string | null
          phone_number: string
          state: string
          updated_at?: string | null
          user_id: string
          weight?: number | null
        }
        Update: {
          address?: string | null
          age?: number
          availability?: boolean | null
          blood_group?: string
          city?: string
          created_at?: string | null
          email?: string | null
          emergency_contact?: string | null
          full_name?: string
          height?: number | null
          id?: string
          last_donation_date?: string | null
          medical_conditions?: string | null
          pdf_url?: string | null
          phone_number?: string
          state?: string
          updated_at?: string | null
          user_id?: string
          weight?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          full_name: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      requests: {
        Row: {
          blood_group_needed: string
          contact_details: string
          created_at: string | null
          doctor_name: string | null
          hospital_name: string | null
          id: string
          location: string
          medical_condition: string | null
          message: string | null
          name: string
          patient_age: number | null
          relation_to_patient: string | null
          required_by_date: string | null
          status: string | null
          units_needed: number | null
          updated_at: string | null
          urgency_level: string | null
          user_id: string
        }
        Insert: {
          blood_group_needed: string
          contact_details: string
          created_at?: string | null
          doctor_name?: string | null
          hospital_name?: string | null
          id?: string
          location: string
          medical_condition?: string | null
          message?: string | null
          name: string
          patient_age?: number | null
          relation_to_patient?: string | null
          required_by_date?: string | null
          status?: string | null
          units_needed?: number | null
          updated_at?: string | null
          urgency_level?: string | null
          user_id: string
        }
        Update: {
          blood_group_needed?: string
          contact_details?: string
          created_at?: string | null
          doctor_name?: string | null
          hospital_name?: string | null
          id?: string
          location?: string
          medical_condition?: string | null
          message?: string | null
          name?: string
          patient_age?: number | null
          relation_to_patient?: string | null
          required_by_date?: string | null
          status?: string | null
          units_needed?: number | null
          updated_at?: string | null
          urgency_level?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
