export interface Event {
  id: number;
  name: string;
  uuid: string;
  tasks: Task[];
}

export interface Task {
  id: number;
  name: string;
  timeslots: Timeslot[];
}

export interface Timeslot {
  id: number;
  from: string;
  to: string;
  members: Member[];
}

export interface Member {
  id: number;
  name: string;
}

export interface Response {
  success: boolean;
  message: string;
}
