json.extract! task, :id, :title, :description, :status, :created_at, :updated_at
json.url task_url(task, format: :json)
