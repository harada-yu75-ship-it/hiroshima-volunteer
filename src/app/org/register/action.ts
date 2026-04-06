'use server'
import { createClient } from '@supabase/supabase-js'

export async function submitOffer(data: {
  org: string
  title: string
  date: string
  deadline: string
  time_slot: string
  place: string
  slots: number
  contact: string
  detail: string
  motimono: string
  fukusou: string
  chui: string
}) {
  const supabase = createClient(
    'https://vcitwnhfxidghjbladke.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjaXR3bmhmeGlkZ2hqYmxhZGtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0MzkyODUsImV4cCI6MjA5MTAxNTI4NX0.69gpfZ-iCV4jjsrdzqIDnZ8SMqnYL61L7XKI0gXslcw'
  )
  const { error } = await supabase.from('offers').insert({
    school_id: '00000000-0000-0000-0000-000000000001',
    ...data,
    status: 'pending',
    applied: 0,
  })
  if (error) throw new Error(error.message)
  return { success: true }
}