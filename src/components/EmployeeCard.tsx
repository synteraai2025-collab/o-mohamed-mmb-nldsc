"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Briefcase, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Employee {
  id: string;
  name: string;
  role: string;
  email: string;
  created_at: string;
}

interface EmployeeCardProps {
  employee: Employee;
  className?: string;
}

export function EmployeeCard({ employee, className }: EmployeeCardProps) {
  return (
    <Card className={cn("w-full transition-all duration-200 hover:shadow-lg", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Employee Profile
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold">{employee.name}</p>
              <p className="text-sm text-muted-foreground">{employee.role}</p>
            </div>
          </div>
          
          <div className="space-y-2 pt-2">
            <div className="flex items-center space-x-3 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{employee.email}</span>
            </div>
            
            <div className="flex items-center space-x-3 text-sm">
              <Briefcase className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                Joined {new Date(employee.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
